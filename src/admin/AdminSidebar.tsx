import type { AdminSection } from './adminData'

type NavItem = {
  section: AdminSection
  label: string
  icon: React.ReactNode
}

type NavGroup = {
  label: string
  items: NavItem[]
}

type Props = {
  navGroups: NavGroup[]
  collapsed: boolean
  expandedGroups: Set<string>
  currentSection: AdminSection
  onToggleCollapse: () => void
  onToggleGroup: (label: string) => void
  onSelectSection: (section: AdminSection) => void
  onExitAdmin: () => void
}

export default function AdminSidebar({
  navGroups,
  collapsed,
  expandedGroups,
  currentSection,
  onToggleCollapse,
  onToggleGroup,
  onSelectSection,
  onExitAdmin,
}: Props) {
  return (
    <aside className={`flex flex-col bg-[#0F0F18] transition-all duration-300 flex-shrink-0 ${collapsed ? 'w-14' : 'w-60'}`}>
      <div className={`flex items-center h-14 border-b border-white/8 px-3.5 flex-shrink-0 ${collapsed ? 'justify-center' : 'gap-3'}`}>
        <div className="w-7 h-7 rounded-lg bg-[#E8450A] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-bold">N</span>
        </div>
        {!collapsed && (
          <>
            <div className="min-w-0 flex-1">
              <p className="text-white font-bold text-sm leading-none">Nexus</p>
              <p className="text-[#5B5B72] text-[10px] mt-0.5">Admin Panel</p>
            </div>
            <button onClick={onToggleCollapse} className="text-[#5B5B72] hover:text-white transition-colors flex-shrink-0">‹</button>
          </>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5 scrollbar-none">
        {navGroups.map(group => (
          <div key={group.label} className="mb-1">
            {!collapsed && (
              <button onClick={() => onToggleGroup(group.label)} className="w-full flex items-center justify-between px-2 py-1.5 text-[10px] font-bold text-[#4B4B62] uppercase tracking-widest hover:text-[#9B9BB8] transition-colors">
                {group.label}
                <span className={`transition-transform ${expandedGroups.has(group.label) ? 'rotate-180' : ''}`}>⌄</span>
              </button>
            )}
            {(collapsed || expandedGroups.has(group.label)) && group.items.map(item => (
              <button
                key={item.section}
                onClick={() => onSelectSection(item.section)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all text-[13px] ${currentSection === item.section ? 'bg-[#E8450A]/15 text-[#E8450A]' : 'text-[#8B8BA8] hover:bg-white/5 hover:text-white'} ${collapsed ? 'justify-center' : ''}`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="font-medium truncate flex-1 text-left">{item.label}</span>}
                {!collapsed && currentSection === item.section && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#E8450A] flex-shrink-0" />}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className="border-t border-white/8 p-2.5 space-y-2 flex-shrink-0">
        {!collapsed && (
          <button onClick={onExitAdmin} className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/8 text-[#C8C8E0] hover:bg-white/12 hover:text-white transition-all text-xs font-medium">
            View Storefront
          </button>
        )}
      </div>
    </aside>
  )
}
