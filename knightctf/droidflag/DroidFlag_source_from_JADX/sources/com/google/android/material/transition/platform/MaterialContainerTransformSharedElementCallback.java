package com.google.android.material.transition.platform;

import android.app.Activity;
import android.app.SharedElementCallback;
import android.content.Context;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.os.Parcelable;
import android.transition.Transition;
import android.view.View;
import android.view.Window;
import androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure;
import androidx.core.graphics.BlendModeColorFilterCompat;
import androidx.core.graphics.BlendModeCompat;
import com.google.android.material.C0460R;
import com.google.android.material.internal.ContextUtils;
import com.google.android.material.shape.ShapeAppearanceModel;
import com.google.android.material.shape.Shapeable;
import java.lang.ref.WeakReference;
import java.util.List;
import java.util.Map;

public class MaterialContainerTransformSharedElementCallback extends SharedElementCallback {
    /* access modifiers changed from: private */
    public static WeakReference<View> capturedSharedElement;
    private boolean entering = true;
    private Rect returnEndBounds;
    private ShapeProvider shapeProvider = new ShapeableViewShapeProvider();
    private boolean sharedElementReenterTransitionEnabled = false;
    private boolean transparentWindowBackgroundEnabled = true;

    public interface ShapeProvider {
        ShapeAppearanceModel provideShape(View view);
    }

    public static class ShapeableViewShapeProvider implements ShapeProvider {
        public ShapeAppearanceModel provideShape(View view) {
            if (view instanceof Shapeable) {
                return ((Shapeable) view).getShapeAppearanceModel();
            }
            return null;
        }
    }

    public Parcelable onCaptureSharedElementSnapshot(View view, Matrix matrix, RectF rectF) {
        capturedSharedElement = new WeakReference<>(view);
        return super.onCaptureSharedElementSnapshot(view, matrix, rectF);
    }

    public View onCreateSnapshotView(Context context, Parcelable parcelable) {
        WeakReference<View> weakReference;
        View view;
        ShapeAppearanceModel provideShape;
        View onCreateSnapshotView = super.onCreateSnapshotView(context, parcelable);
        if (!(onCreateSnapshotView == null || (weakReference = capturedSharedElement) == null || this.shapeProvider == null || (view = (View) weakReference.get()) == null || (provideShape = this.shapeProvider.provideShape(view)) == null)) {
            onCreateSnapshotView.setTag(C0460R.C0463id.mtrl_motion_snapshot_view, provideShape);
        }
        return onCreateSnapshotView;
    }

    public void onMapSharedElements(List<String> list, Map<String, View> map) {
        View view;
        Activity activity;
        if (!list.isEmpty() && !map.isEmpty() && (view = map.get(list.get(0))) != null && (activity = ContextUtils.getActivity(view.getContext())) != null) {
            Window window = activity.getWindow();
            if (this.entering) {
                setUpEnterTransform(window);
            } else {
                setUpReturnTransform(activity, window);
            }
        }
    }

    public void onSharedElementStart(List<String> list, List<View> list2, List<View> list3) {
        if (!list2.isEmpty() && !list3.isEmpty()) {
            list2.get(0).setTag(C0460R.C0463id.mtrl_motion_snapshot_view, list3.get(0));
        }
        if (!this.entering && !list2.isEmpty() && this.returnEndBounds != null) {
            View view = list2.get(0);
            view.measure(View.MeasureSpec.makeMeasureSpec(this.returnEndBounds.width(), BasicMeasure.EXACTLY), View.MeasureSpec.makeMeasureSpec(this.returnEndBounds.height(), BasicMeasure.EXACTLY));
            view.layout(this.returnEndBounds.left, this.returnEndBounds.top, this.returnEndBounds.right, this.returnEndBounds.bottom);
        }
    }

    public void onSharedElementEnd(List<String> list, List<View> list2, List<View> list3) {
        if (!list2.isEmpty() && (list2.get(0).getTag(C0460R.C0463id.mtrl_motion_snapshot_view) instanceof View)) {
            list2.get(0).setTag(C0460R.C0463id.mtrl_motion_snapshot_view, (Object) null);
        }
        if (!this.entering && !list2.isEmpty()) {
            this.returnEndBounds = TransitionUtils.getRelativeBoundsRect(list2.get(0));
        }
        this.entering = false;
    }

    public ShapeProvider getShapeProvider() {
        return this.shapeProvider;
    }

    public void setShapeProvider(ShapeProvider shapeProvider2) {
        this.shapeProvider = shapeProvider2;
    }

    public boolean isTransparentWindowBackgroundEnabled() {
        return this.transparentWindowBackgroundEnabled;
    }

    public void setTransparentWindowBackgroundEnabled(boolean z) {
        this.transparentWindowBackgroundEnabled = z;
    }

    public boolean isSharedElementReenterTransitionEnabled() {
        return this.sharedElementReenterTransitionEnabled;
    }

    public void setSharedElementReenterTransitionEnabled(boolean z) {
        this.sharedElementReenterTransitionEnabled = z;
    }

    private void setUpEnterTransform(final Window window) {
        Transition sharedElementEnterTransition = window.getSharedElementEnterTransition();
        if (sharedElementEnterTransition instanceof MaterialContainerTransform) {
            MaterialContainerTransform materialContainerTransform = (MaterialContainerTransform) sharedElementEnterTransition;
            if (!this.sharedElementReenterTransitionEnabled) {
                window.setSharedElementReenterTransition((Transition) null);
            }
            if (this.transparentWindowBackgroundEnabled) {
                updateBackgroundFadeDuration(window, materialContainerTransform);
                materialContainerTransform.addListener(new TransitionListenerAdapter() {
                    public void onTransitionStart(Transition transition) {
                        MaterialContainerTransformSharedElementCallback.removeWindowBackground(window);
                    }

                    public void onTransitionEnd(Transition transition) {
                        MaterialContainerTransformSharedElementCallback.restoreWindowBackground(window);
                    }
                });
            }
        }
    }

    private void setUpReturnTransform(final Activity activity, final Window window) {
        Transition sharedElementReturnTransition = window.getSharedElementReturnTransition();
        if (sharedElementReturnTransition instanceof MaterialContainerTransform) {
            MaterialContainerTransform materialContainerTransform = (MaterialContainerTransform) sharedElementReturnTransition;
            materialContainerTransform.setHoldAtEndEnabled(true);
            materialContainerTransform.addListener(new TransitionListenerAdapter() {
                public void onTransitionEnd(Transition transition) {
                    View view;
                    if (!(MaterialContainerTransformSharedElementCallback.capturedSharedElement == null || (view = (View) MaterialContainerTransformSharedElementCallback.capturedSharedElement.get()) == null)) {
                        view.setAlpha(1.0f);
                        WeakReference unused = MaterialContainerTransformSharedElementCallback.capturedSharedElement = null;
                    }
                    activity.finish();
                    activity.overridePendingTransition(0, 0);
                }
            });
            if (this.transparentWindowBackgroundEnabled) {
                updateBackgroundFadeDuration(window, materialContainerTransform);
                materialContainerTransform.addListener(new TransitionListenerAdapter() {
                    public void onTransitionStart(Transition transition) {
                        MaterialContainerTransformSharedElementCallback.removeWindowBackground(window);
                    }
                });
            }
        }
    }

    /* access modifiers changed from: private */
    public static void removeWindowBackground(Window window) {
        window.getDecorView().getBackground().mutate().setColorFilter(BlendModeColorFilterCompat.createBlendModeColorFilterCompat(0, BlendModeCompat.CLEAR));
    }

    /* access modifiers changed from: private */
    public static void restoreWindowBackground(Window window) {
        window.getDecorView().getBackground().mutate().clearColorFilter();
    }

    private static void updateBackgroundFadeDuration(Window window, MaterialContainerTransform materialContainerTransform) {
        window.setTransitionBackgroundFadeDuration(materialContainerTransform.getDuration());
    }
}
