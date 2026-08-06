import { Suspense, lazy, useState } from 'react'
import type { AdminSection } from './adminData'
import type { View } from '../app/navigation'
import { useSession } from '@/state/session-store'
import AdminSidebar from './AdminSidebar'
import AdminTopBar from './AdminTopBar'

type Props = {
  onExitAdmin: (v: View) => void
}

type NavItem = {
  section: AdminSection
  label: string
  icon: React.ReactNode
}

type NavGroup = {
  label: string
  items: NavItem[]
}

const Icon = ({ d, size = 16 }: { d: string; size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const StorefrontBuilder = lazy(() => import('./pages/StorefrontBuilder'))
const HomepageCMS = lazy(() => import('./pages/HomepageCMS'))
const ProductsAdmin = lazy(() => import('./pages/ProductsAdmin'))
const VendorsAdmin = lazy(() => import('./pages/VendorsAdmin'))
const OrdersAdmin = lazy(() => import('./pages/OrdersAdmin'))
const CustomersAdmin = lazy(() => import('./pages/CustomersAdmin'))
const InventoryAdmin = lazy(() => import('./pages/InventoryAdmin'))
const AnalyticsAdmin = lazy(() => import('./pages/AnalyticsAdmin'))
const MarketingAdmin = lazy(() => import('./pages/MarketingAdmin'))
const FinanceAdmin = lazy(() => import('./pages/FinanceAdmin'))
const SEOAdmin = lazy(() => import('./pages/SEOAdmin'))
const ThemeCustomizer = lazy(() => import('./pages/ThemeCustomizer'))
const SettingsAdmin = lazy(() => import('./pages/SettingsAdmin'))
const RolesAdmin = lazy(() => import('./pages/RolesAdmin'))
const AuditLogsAdmin = lazy(() => import('./pages/AuditLogsAdmin'))
const VendorApplicationsAdmin = lazy(() => import('./pages/VendorApplicationsAdmin'))

const navGroups: NavGroup[] = [
  { label: 'Overview', items: [{ section: 'dashboard', label: 'Dashboard', icon: <Icon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> }] },
  { label: 'Storefront', items: [{ section: 'storefront-builder', label: 'Homepage Builder', icon: <Icon d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /> }, { section: 'homepage-cms', label: 'Hero Banners', icon: <Icon d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> }, { section: 'theme-customizer', label: 'Theme Customizer', icon: <Icon d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /> }] },
  { label: 'Catalog', items: [{ section: 'products', label: 'Products', icon: <Icon d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> }, { section: 'inventory', label: 'Inventory', icon: <Icon d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.5 9h11L19 8M10 12h4" /> }] },
  { label: 'Sales', items: [{ section: 'orders', label: 'All Orders', icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /> }, { section: 'customers', label: 'Customers', icon: <Icon d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /> }] },
  { label: 'Vendors', items: [{ section: 'vendors', label: 'All Vendors', icon: <Icon d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> }, { section: 'vendors-applications', label: 'Applications', icon: <Icon d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> }] },
  { label: 'Marketing', items: [{ section: 'marketing', label: 'Campaigns & Promos', icon: <Icon d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /> }, { section: 'seo', label: 'SEO', icon: <Icon d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> }] },
  { label: 'Analytics', items: [{ section: 'analytics', label: 'Analytics', icon: <Icon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> }] },
  { label: 'Finance', items: [{ section: 'finance', label: 'Finance', icon: <Icon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> }] },
  { label: 'Platform', items: [{ section: 'settings', label: 'Settings', icon: <Icon d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> }, { section: 'roles', label: 'Roles & Permissions', icon: <Icon d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /> }, { section: 'audit-logs', label: 'Audit Logs', icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /> }] },
]

const sectionPages: Partial<Record<AdminSection, React.FC<{ onNavigate: (s: AdminSection) => void }>>> = {
  dashboard: AdminDashboard,
  'storefront-builder': StorefrontBuilder,
  'homepage-cms': HomepageCMS,
  products: ProductsAdmin,
  vendors: VendorsAdmin,
  orders: OrdersAdmin,
  customers: CustomersAdmin,
  inventory: InventoryAdmin,
  analytics: AnalyticsAdmin,
  marketing: MarketingAdmin,
  finance: FinanceAdmin,
  seo: SEOAdmin,
  'theme-customizer': ThemeCustomizer,
  settings: SettingsAdmin,
  roles: RolesAdmin,
  'audit-logs': AuditLogsAdmin,
  'vendors-applications': VendorApplicationsAdmin,
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 p-12 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#F4F4F8] flex items-center justify-center">
        <span className="text-[#9B9BB8]">⌂</span>
      </div>
      <div>
        <p className="font-semibold text-[#111118]">{title}</p>
        <p className="text-sm text-[#6B6B82] mt-1">This section is ready for content.</p>
      </div>
      <span className="text-xs bg-[#EEF2FF] text-[#6366F1] px-3 py-1.5 rounded-full font-semibold">Coming Soon</span>
    </div>
  )
}

export default function AdminShellContent({ onExitAdmin }: Props) {
  const session = useSession()
  const [section, setSection] = useState<AdminSection>('dashboard')
  const [collapsed, setCollapsed] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['Overview', 'Storefront', 'Catalog', 'Sales', 'Vendors', 'Marketing']))
  const [notifOpen, setNotifOpen] = useState(false)
  const [email, setEmail] = useState('admin@marketplace.local')
  const [password, setPassword] = useState('seeded-password')
  const [loginError, setLoginError] = useState<string | null>(null)
  const [loggingIn, setLoggingIn] = useState(false)

  const currentLabel = navGroups.flatMap(g => g.items).find(i => i.section === section)?.label ?? 'Dashboard'
  const PageComponent = sectionPages[section]

  if (session.status === 'loading') {
    return (
      <div className="min-h-screen bg-[#F4F4F8] flex items-center justify-center px-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div className="rounded-3xl border border-[#E2E2EC] bg-white px-6 py-5 shadow-[0_20px_80px_rgba(15,15,24,0.08)]">
          <p className="text-sm font-semibold text-[#111118]">Restoring your admin session...</p>
          <p className="mt-1 text-xs text-[#6B6B82]">Checking auth and permissions.</p>
        </div>
      </div>
    )
  }

  if (session.status !== 'authenticated') {
    return (
      <div className="min-h-screen bg-[#F4F4F8] flex items-center justify-center px-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div className="w-full max-w-md rounded-3xl border border-[#E2E2EC] bg-white p-8 shadow-[0_20px_80px_rgba(15,15,24,0.08)]">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9B9BB8]">Admin Access</p>
          <h1 className="mt-3 text-3xl font-black text-[#111118]">Sign in to the marketplace admin</h1>
          <p className="mt-2 text-sm text-[#6B6B82]">
            Use the seeded development account to load live dashboard data and RBAC-protected CRUD routes.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={async event => {
              event.preventDefault()
              setLoggingIn(true)
              setLoginError(null)

              const result = await session.signIn(email, password)
              if (!result.ok) {
                setLoginError(result.message ?? 'Unable to sign in.')
              }

              setLoggingIn(false)
            }}
          >
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-[#6B6B82]">Email</label>
              <input
                value={email}
                onChange={event => setEmail(event.target.value)}
                className="w-full h-11 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] px-4 text-sm outline-none transition-colors focus:border-[#E8450A]"
                placeholder="admin@marketplace.local"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-[#6B6B82]">Password</label>
              <input
                value={password}
                onChange={event => setPassword(event.target.value)}
                className="w-full h-11 rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] px-4 text-sm outline-none transition-colors focus:border-[#E8450A]"
                placeholder="seeded-password"
                type="password"
              />
            </div>

            {loginError && (
              <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#991B1B]">
                {loginError}
              </div>
            )}

            <div className="space-y-2">
              <button
                type="submit"
                disabled={loggingIn}
                className="w-full rounded-xl bg-[#E8450A] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C93A07] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loggingIn ? 'Signing in...' : 'Sign In'}
              </button>
              <button
                type="button"
                onClick={async () => {
                  setLoggingIn(true)
                  await session.signIn('admin@marketplace.local', 'seeded-password')
                  setLoggingIn(false)
                }}
                className="w-full rounded-xl border border-[#E2E2EC] bg-[#F9F9FC] px-4 py-3 text-sm font-semibold text-[#111118] transition-colors hover:bg-[#EEF2FF] hover:text-[#6366F1]"
              >
                ⚡ Instant Demo Login (No Backend Needed)
              </button>
            </div>
          </form>

          <div className="mt-6 rounded-2xl bg-[#0F0F18] p-4 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8A8AA3]">Dev account</p>
            <p className="mt-2 font-mono text-sm">admin@marketplace.local</p>
            <p className="font-mono text-sm">seeded-password</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-[#F4F4F8] overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <AdminSidebar
        navGroups={navGroups}
        collapsed={collapsed}
        expandedGroups={expandedGroups}
        currentSection={section}
        onToggleCollapse={() => setCollapsed(v => !v)}
        onToggleGroup={label => {
          setExpandedGroups(prev => {
            const next = new Set(prev)
            if (next.has(label)) next.delete(label)
            else next.add(label)
            return next
          })
        }}
        onSelectSection={setSection}
        onExitAdmin={() => onExitAdmin({ type: 'home' })}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopBar
          label={currentLabel}
          userName={session.user?.fullName}
          notifOpen={notifOpen}
          onToggleNotif={() => setNotifOpen(v => !v)}
          onPreviewStore={() => onExitAdmin({ type: 'home' })}
          onQuickAdd={() => {}}
          onSignOut={() => {
            void session.signOut()
          }}
        />
        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<Placeholder title={`Loading ${currentLabel}`} />}>
            {PageComponent ? <PageComponent onNavigate={setSection} /> : <Placeholder title={currentLabel} />}
          </Suspense>
        </main>
      </div>
    </div>
  )
}
