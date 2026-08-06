type Props = {
  label: string
  userName?: string
  notifOpen: boolean
  onToggleNotif: () => void
  onPreviewStore: () => void
  onQuickAdd: () => void
  onSignOut?: () => void
}

export default function AdminTopBar({
  label,
  userName,
  notifOpen,
  onToggleNotif,
  onPreviewStore,
  onQuickAdd,
  onSignOut,
}: Props) {
  return (
    <header className="h-14 bg-white border-b border-[#E2E2EC] flex items-center gap-4 px-5 flex-shrink-0">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-[#9B9BB8] text-xs">Admin</span>
        <span className="font-semibold text-[#111118] text-sm">{label}</span>
        {userName && <span className="text-xs text-[#9B9BB8]">• {userName}</span>}
      </div>
      <div className="flex-1 max-w-sm mx-auto">
        <div className="flex items-center gap-2 h-8 px-3 bg-[#F4F4F8] rounded-lg border border-[#E2E2EC] text-sm text-[#9B9BB8] cursor-pointer hover:border-[#E8450A] transition-colors">
          <span className="text-xs">Search anything...</span>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <button onClick={onPreviewStore} className="hidden md:flex items-center gap-1.5 h-8 px-3 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors">
          Preview Store
        </button>
        <div className="relative">
          <button onClick={onToggleNotif} className="relative w-8 h-8 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center transition-colors">🔔</button>
          {notifOpen && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-[#E2E2EC] z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#E2E2EC]">
                <p className="font-semibold text-sm text-[#111118]">Alerts</p>
                <button className="text-xs text-[#E8450A] font-semibold">Mark all read</button>
              </div>
            </div>
          )}
        </div>
        <button onClick={onQuickAdd} className="flex items-center gap-1.5 h-8 px-3 bg-[#E8450A] text-white rounded-lg text-xs font-semibold hover:bg-[#C93A07] transition-colors">
          Quick Add
        </button>
        {onSignOut && (
          <button onClick={onSignOut} className="hidden md:flex items-center gap-1.5 h-8 px-3 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:border-[#E8450A] hover:text-[#E8450A] transition-colors">
            Sign Out
          </button>
        )}
      </div>
    </header>
  )
}
