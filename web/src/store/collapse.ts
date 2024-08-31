import { create } from "zustand"

interface CollapseState {
  isPanelCollapse: boolean
  setPanelIsCollapse: (isCollapse: boolean) => void
}

const useCollapseStore = create<CollapseState>((set) => ({
  isPanelCollapse: false,
  setPanelIsCollapse: (isCollapse) =>
    set(() => ({ isPanelCollapse: isCollapse })),
}))

export const usePanelCollapse = () =>
  useCollapseStore((state) => state.isPanelCollapse)

export const usePanelCollapseActions = () => ({
  setPanelIsCollapse: useCollapseStore((state) => state.setPanelIsCollapse),
})
