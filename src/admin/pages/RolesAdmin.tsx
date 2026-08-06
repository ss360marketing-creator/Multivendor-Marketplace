import { useState } from 'react'
import type { AdminSection } from '../adminData'

type Props = { onNavigate: (s: AdminSection) => void }

const roles = [
  { name: 'Super Admin', color: '#E8450A', members: 1, desc: 'Full platform access', locked: true },
  { name: 'Admin', color: '#6366F1', members: 2, desc: 'All features except billing', locked: false },
  { name: 'Store Manager', color: '#059669', members: 3, desc: 'Products, orders, vendors', locked: false },
  { name: 'Catalog Manager', color: '#0EA5E9', members: 4, desc: 'Products & categories only', locked: false },
  { name: 'Order Manager', color: '#D97706', members: 2, desc: 'Orders & refunds', locked: false },
  { name: 'Marketing Manager', color: '#EC4899', members: 3, desc: 'Campaigns & promotions', locked: false },
  { name: 'Finance Manager', color: '#8B5CF6', members: 1, desc: 'Finance & payouts', locked: false },
  { name: 'Support Agent', color: '#14B8A6', members: 8, desc: 'Read-only + customer comms', locked: false },
]

const modules = [
  'Dashboard', 'Products', 'Orders', 'Customers', 'Vendors',
  'Marketing', 'Analytics', 'Finance', 'Settings', 'SEO', 'Content',
]

const perms = ['View', 'Create', 'Edit', 'Delete', 'Approve', 'Publish', 'Export']

// Default permission matrix
const defaultMatrix: Record<string, Record<string, boolean[]>> = {
  'Super Admin': Object.fromEntries(modules.map(m => [m, perms.map(() => true)])),
  'Admin': Object.fromEntries(modules.map(m => [m, perms.map((_, i) => i !== 3 && i !== 8)])),
  'Store Manager': Object.fromEntries(modules.map(m => [m, perms.map((_, i) => i <= 4)])),
  'Catalog Manager': Object.fromEntries(modules.map(m => [m, m === 'Products' ? perms.map(() => true) : perms.map((_, i) => i === 0)])),
  'Order Manager': Object.fromEntries(modules.map(m => [m, m === 'Orders' ? perms.map(() => true) : perms.map((_, i) => i === 0)])),
  'Marketing Manager': Object.fromEntries(modules.map(m => [m, m === 'Marketing' ? perms.map(() => true) : perms.map((_, i) => i === 0)])),
  'Finance Manager': Object.fromEntries(modules.map(m => [m, m === 'Finance' ? perms.map(() => true) : perms.map((_, i) => i === 0)])),
  'Support Agent': Object.fromEntries(modules.map(m => [m, perms.map((_, i) => i === 0)])),
}

const members = [
  { name: 'Alex Admin', email: 'alex@nexus.com', role: 'Super Admin', avatar: 'AA', lastActive: '2 min ago' },
  { name: 'Jamie Cruz', email: 'jamie@nexus.com', role: 'Admin', avatar: 'JC', lastActive: '1 hr ago' },
  { name: 'Morgan Lee', email: 'morgan@nexus.com', role: 'Store Manager', avatar: 'ML', lastActive: 'Yesterday' },
  { name: 'Taylor Kim', email: 'taylor@nexus.com', role: 'Marketing Manager', avatar: 'TK', lastActive: '3 days ago' },
  { name: 'Sam Rivera', email: 'sam@nexus.com', role: 'Finance Manager', avatar: 'SR', lastActive: 'Today' },
]

export default function RolesAdmin({ onNavigate: _ }: Props) {
  const [tab, setTab] = useState<'roles' | 'members' | 'matrix'>('roles')
  const [selectedRole, setSelectedRole] = useState('Store Manager')

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Roles & Permissions</h1>
          <p className="text-sm text-[#6B6B82] mt-0.5">Control access levels across the admin panel</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Invite Member</button>
          <button className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]">+ Create Role</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-[#E2E2EC]">
        {(['roles', 'members', 'matrix'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-3 text-sm font-semibold capitalize border-b-2 transition-all -mb-px ${tab === t ? 'border-[#E8450A] text-[#E8450A]' : 'border-transparent text-[#9B9BB8] hover:text-[#6B6B82]'}`}>{t === 'matrix' ? 'Permission Matrix' : t.charAt(0).toUpperCase() + t.slice(1)}</button>
        ))}
      </div>

      {tab === 'roles' && (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {roles.map(role => (
            <div key={role.name} className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ background: role.color }}>
                  {role.name.slice(0, 2)}
                </div>
                {role.locked ? (
                  <span className="text-xs bg-[#F4F4F8] text-[#9B9BB8] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Locked
                  </span>
                ) : (
                  <button className="w-7 h-7 rounded-lg hover:bg-[#F4F4F8] flex items-center justify-center text-[#9B9BB8] hover:text-[#111118]">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  </button>
                )}
              </div>
              <div>
                <p className="font-bold text-[#111118]">{role.name}</p>
                <p className="text-xs text-[#9B9BB8] mt-0.5">{role.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-[#F4F4F8]">
                <span className="text-xs text-[#6B6B82]">{role.members} member{role.members !== 1 ? 's' : ''}</span>
                <button onClick={() => { setSelectedRole(role.name); setTab('matrix') }} className="text-xs font-semibold text-[#E8450A] hover:underline">Permissions →</button>
              </div>
            </div>
          ))}
          <button className="bg-white rounded-xl border-2 border-dashed border-[#E2E2EC] p-5 flex flex-col items-center justify-center gap-3 hover:border-[#E8450A] text-[#9B9BB8] hover:text-[#E8450A] transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#F4F4F8] group-hover:bg-[#FFF7F5] flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </div>
            <p className="text-sm font-semibold">Custom Role</p>
          </button>
        </div>
      )}

      {tab === 'members' && (
        <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                {['Member', 'Role', 'Last Active', 'Actions'].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F4F8]">
              {members.map(m => {
                const role = roles.find(r => r.name === m.role)
                return (
                  <tr key={m.email} className="hover:bg-[#F9F9FC] transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: role?.color ?? '#9B9BB8' }}>{m.avatar}</div>
                        <div>
                          <p className="font-semibold text-[#111118]">{m.name}</p>
                          <p className="text-xs text-[#9B9BB8]">{m.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: role?.color ?? '#9B9BB8' }} />
                        {m.role}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-[#9B9BB8]">{m.lastActive}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <button className="text-xs font-semibold text-[#6B6B82] hover:text-[#E8450A]">Edit Role</button>
                        <span className="text-[#E2E2EC]">·</span>
                        <button className="text-xs font-semibold text-[#E11D48]">Remove</button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'matrix' && (
        <div className="space-y-4">
          {/* Role selector */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-[#6B6B82]">Viewing permissions for:</p>
            <div className="flex items-center gap-1">
              {roles.map(r => (
                <button key={r.name} onClick={() => setSelectedRole(r.name)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedRole === r.name ? 'text-white' : 'bg-[#F4F4F8] text-[#9B9BB8] hover:text-[#6B6B82]'}`} style={selectedRole === r.name ? { background: r.color } : {}}>{r.name}</button>
              ))}
            </div>
          </div>

          {/* Matrix table */}
          <div className="bg-white rounded-xl border border-[#E2E2EC] overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9F9FC] border-b border-[#F4F4F8]">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide w-40">Module</th>
                  {perms.map(p => (
                    <th key={p} className="text-center px-4 py-3 text-xs font-semibold text-[#9B9BB8] uppercase tracking-wide">{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F4F8]">
                {modules.map(mod => {
                  const matrix = defaultMatrix[selectedRole]?.[mod] ?? perms.map(() => false)
                  return (
                    <tr key={mod} className="hover:bg-[#F9F9FC] transition-colors">
                      <td className="px-5 py-3 font-semibold text-[#111118]">{mod}</td>
                      {matrix.map((allowed, i) => (
                        <td key={i} className="px-4 py-3 text-center">
                          <div className={`w-5 h-5 rounded-full mx-auto flex items-center justify-center ${allowed ? 'bg-[#D1FAE5]' : 'bg-[#F4F4F8]'}`}>
                            {allowed ? (
                              <svg className="w-3 h-3 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            ) : (
                              <div className="w-1.5 h-0.5 bg-[#D1D5DB] rounded-full" />
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
