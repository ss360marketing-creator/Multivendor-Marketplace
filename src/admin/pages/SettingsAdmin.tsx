import { useState } from 'react'
import type { AdminSection } from '../adminData'

type Props = { onNavigate: (s: AdminSection) => void }

const settingsTabs = ['General', 'Payments', 'Shipping', 'Notifications', 'Security', 'Integrations', 'API']

const paymentMethods = [
  { id: 'card', name: 'Credit / Debit Card', icon: '💳', provider: 'Stripe', enabled: true, testMode: false, fee: '2.9% + $0.30' },
  { id: 'wallet', name: 'Digital Wallets', icon: '📱', provider: 'Stripe', enabled: true, testMode: false, fee: '2.9% + $0.30' },
  { id: 'cod', name: 'Cash on Delivery', icon: '💵', provider: 'Native', enabled: true, testMode: false, fee: 'Fixed $2.00' },
  { id: 'bank', name: 'Bank Transfer', icon: '🏦', provider: 'Plaid', enabled: false, testMode: true, fee: '1.5%' },
  { id: 'installment', name: 'Buy Now Pay Later', icon: '📆', provider: 'Affirm', enabled: false, testMode: true, fee: '6% + $0.30' },
]

const Toggle = ({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) => (
  <button
    onClick={() => onChange(!on)}
    className={`relative w-10 h-6 rounded-full transition-all flex-shrink-0 ${on ? 'bg-[#E8450A]' : 'bg-[#D1D5DB]'}`}
  >
    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${on ? 'left-5' : 'left-1'}`} />
  </button>
)

export default function SettingsAdmin({ onNavigate: _ }: Props) {
  const [tab, setTab] = useState('General')
  const [payments, setPayments] = useState(paymentMethods)

  const togglePayment = (id: string) => {
    setPayments(prev => prev.map(p => p.id === id ? { ...p, enabled: !p.enabled } : p))
  }

  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111118]">Settings</h1>
          <p className="text-sm text-[#6B6B82] mt-0.5">Platform configuration and preferences</p>
        </div>
        <button className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold hover:bg-[#C93A07]">Save Changes</button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-[#E2E2EC] overflow-x-auto">
        {settingsTabs.map(t => (
          <button key={t} onClick={() => setTab(t)} className={`flex-shrink-0 px-4 py-3 text-sm font-semibold border-b-2 transition-all -mb-px ${tab === t ? 'border-[#E8450A] text-[#E8450A]' : 'border-transparent text-[#9B9BB8] hover:text-[#6B6B82]'}`}>{t}</button>
        ))}
      </div>

      {tab === 'General' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
            <h3 className="font-semibold text-[#111118]">Store Information</h3>
            {[
              { label: 'Store Name', value: 'Nexus Marketplace' },
              { label: 'Store URL', value: 'https://nexusmarket.com' },
              { label: 'Support Email', value: 'support@nexusmarket.com' },
              { label: 'Phone', value: '+1 (800) 555-0100' },
            ].map(f => (
              <div key={f.label} className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B6B82]">{f.label}</label>
                <input defaultValue={f.value} className="w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
            <h3 className="font-semibold text-[#111118]">Regional Settings</h3>
            {[
              { label: 'Currency', type: 'select', options: ['USD - US Dollar', 'EUR - Euro', 'GBP - British Pound', 'AED - UAE Dirham'] },
              { label: 'Timezone', type: 'select', options: ['(UTC-5) Eastern Time', '(UTC+0) UTC', '(UTC+4) Dubai', '(UTC+8) Singapore'] },
              { label: 'Language', type: 'select', options: ['English (US)', 'Arabic', 'French', 'Spanish'] },
              { label: 'Date Format', type: 'select', options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'] },
            ].map(f => (
              <div key={f.label} className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B6B82]">{f.label}</label>
                <select className="w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none">
                  {f.options.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3">
            <h3 className="font-semibold text-[#111118]">Store Features</h3>
            {[
              { label: 'Enable Guest Checkout', desc: 'Allow purchases without account creation', on: true },
              { label: 'Enable Wishlist', desc: 'Let customers save items for later', on: true },
              { label: 'Enable Product Reviews', desc: 'Allow verified purchase reviews', on: true },
              { label: 'Enable Compare Products', desc: 'Side-by-side product comparison', on: false },
              { label: 'Maintenance Mode', desc: 'Temporarily take the store offline', on: false },
            ].map(f => {
              const [on, setOn] = useState(f.on)
              return (
                <div key={f.label} className="flex items-center justify-between py-2 border-b border-[#F4F4F8] last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-[#111118]">{f.label}</p>
                    <p className="text-xs text-[#9B9BB8]">{f.desc}</p>
                  </div>
                  <Toggle on={on} onChange={setOn} />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {tab === 'Payments' && (
        <div className="space-y-4">
          <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-xl px-5 py-3 flex items-center gap-3">
            <svg className="w-4 h-4 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="text-sm text-[#92400E]">Never expose live API keys in plain text. Use environment variables or a secrets manager.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {payments.map(method => (
              <div key={method.id} className={`bg-white rounded-xl border-2 p-5 space-y-4 transition-all ${method.enabled ? 'border-[#E8450A]/20' : 'border-[#E2E2EC]'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <p className="font-bold text-[#111118] text-sm">{method.name}</p>
                      <p className="text-xs text-[#9B9BB8]">{method.provider}</p>
                    </div>
                  </div>
                  <Toggle on={method.enabled} onChange={() => togglePayment(method.id)} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#9B9BB8]">Processing fee</span>
                    <span className="font-mono font-semibold text-[#111118]">{method.fee}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#9B9BB8]">Mode</span>
                    <span className={`font-semibold ${method.testMode ? 'text-[#D97706]' : 'text-[#059669]'}`}>{method.testMode ? 'Test' : 'Live'}</span>
                  </div>
                </div>
                <button className="w-full py-2 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Configure</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'Security' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3">
            <h3 className="font-semibold text-[#111118]">Security Settings</h3>
            {[
              { label: 'Two-Factor Authentication', desc: 'Require 2FA for all admin accounts', on: true },
              { label: 'Login Rate Limiting', desc: 'Block IPs after 5 failed attempts', on: true },
              { label: 'Session Timeout', desc: 'Auto-logout after 30 minutes of inactivity', on: true },
              { label: 'IP Allowlist', desc: 'Restrict admin access to specific IPs', on: false },
              { label: 'Audit Logging', desc: 'Log all admin actions for compliance', on: true },
            ].map(f => {
              const [on, setOn] = useState(f.on)
              return (
                <div key={f.label} className="flex items-center justify-between py-2 border-b border-[#F4F4F8] last:border-0">
                  <div><p className="text-sm font-semibold text-[#111118]">{f.label}</p><p className="text-xs text-[#9B9BB8]">{f.desc}</p></div>
                  <Toggle on={on} onChange={setOn} />
                </div>
              )
            })}
          </div>
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
            <h3 className="font-semibold text-[#111118]">Change Admin Password</h3>
            {['Current Password', 'New Password', 'Confirm Password'].map(f => (
              <div key={f} className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B6B82]">{f}</label>
                <input type="password" placeholder="••••••••" className="w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
              </div>
            ))}
            <button className="w-full py-2.5 bg-[#E8450A] text-white rounded-xl text-sm font-semibold">Update Password</button>
          </div>
        </div>
      )}

      {tab === 'Shipping' && (
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#111118]">Shipping Zones</h3>
              <button className="px-3 py-1.5 bg-[#E8450A] text-white rounded-lg text-xs font-bold hover:bg-[#C93A07]">+ Add Zone</button>
            </div>
            <div className="space-y-3">
              {[
                { zone: 'Domestic (US)', methods: ['Standard (3–5 days)', 'Express (1–2 days)', 'Overnight'], countries: 'United States', active: true },
                { zone: 'Europe', methods: ['Standard (7–14 days)', 'Express (3–5 days)'], countries: 'EU + UK', active: true },
                { zone: 'Middle East', methods: ['Standard (10–14 days)'], countries: 'UAE, KSA, Qatar +8', active: true },
                { zone: 'Rest of World', methods: ['Standard (14–21 days)'], countries: '180+ countries', active: false },
              ].map(z => (
                <div key={z.zone} className="flex items-start justify-between py-3 border-b border-[#F4F4F8] last:border-0">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-[#111118] text-sm">{z.zone}</p>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${z.active ? 'bg-[#D1FAE5] text-[#065F46]' : 'bg-[#F4F4F8] text-[#9B9BB8]'}`}>{z.active ? 'Active' : 'Inactive'}</span>
                    </div>
                    <p className="text-xs text-[#9B9BB8] mt-0.5">{z.countries}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {z.methods.map(m => <span key={m} className="text-[11px] bg-[#EEF2FF] text-[#4338CA] px-2 py-0.5 rounded-full">{m}</span>)}
                    </div>
                  </div>
                  <button className="text-xs font-semibold text-[#E8450A] hover:underline flex-shrink-0 ml-4">Edit</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3">
            <h3 className="font-semibold text-[#111118]">Free Shipping Rules</h3>
            {[
              { label: 'Enable free shipping threshold', desc: 'Automatically waive shipping for eligible orders', on: true },
              { label: 'Free shipping minimum', desc: 'Orders over $75 qualify for free standard shipping', on: true },
              { label: 'Free shipping for VIP customers', desc: 'All VIP segment orders ship free regardless of total', on: false },
              { label: 'Apply free shipping to all vendors', desc: 'Platform absorbs shipping cost across all vendors', on: false },
            ].map(f => {
              const [on, setOn] = useState(f.on)
              return (
                <div key={f.label} className="flex items-center justify-between py-2 border-b border-[#F4F4F8] last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-[#111118]">{f.label}</p>
                    <p className="text-xs text-[#9B9BB8]">{f.desc}</p>
                  </div>
                  <Toggle on={on} onChange={setOn} />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {tab === 'Notifications' && (
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-3">
            <h3 className="font-semibold text-[#111118]">Email Notifications</h3>
            <p className="text-xs text-[#9B9BB8]">Configure which system events trigger admin emails</p>
            {[
              { label: 'New order placed', on: true },
              { label: 'New vendor application', on: true },
              { label: 'Low stock alert', on: true },
              { label: 'Payment failure', on: true },
              { label: 'New customer registered', on: false },
              { label: 'Vendor payout processed', on: true },
              { label: 'Customer review submitted', on: false },
              { label: 'Dispute raised', on: true },
            ].map(n => {
              const [on, setOn] = useState(n.on)
              return (
                <div key={n.label} className="flex items-center justify-between py-2 border-b border-[#F4F4F8] last:border-0">
                  <p className="text-sm text-[#111118]">{n.label}</p>
                  <Toggle on={on} onChange={setOn} />
                </div>
              )
            })}
          </div>

          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
            <h3 className="font-semibold text-[#111118]">Notification Email</h3>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#6B6B82]">Admin notification email</label>
              <input defaultValue="alerts@nexusmarket.com" className="w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#6B6B82]">Finance notification email</label>
              <input defaultValue="finance@nexusmarket.com" className="w-full h-10 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg text-sm outline-none focus:border-[#E8450A]" />
            </div>
            <button className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold">Save</button>
          </div>
        </div>
      )}

      {tab === 'Integrations' && (
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            { name: 'Stripe', category: 'Payments', icon: '💳', status: 'connected', desc: 'Payment processing and payouts' },
            { name: 'Shippo', category: 'Shipping', icon: '📦', status: 'connected', desc: 'Multi-carrier shipping labels' },
            { name: 'Mailchimp', category: 'Email', icon: '📧', status: 'disconnected', desc: 'Email campaigns and automation' },
            { name: 'Google Analytics', category: 'Analytics', icon: '📊', status: 'connected', desc: 'Web analytics and conversion tracking' },
            { name: 'Facebook Pixel', category: 'Ads', icon: '📣', status: 'connected', desc: 'Ad retargeting and conversion events' },
            { name: 'Zendesk', category: 'Support', icon: '🎧', status: 'disconnected', desc: 'Customer support ticketing' },
            { name: 'Twilio', category: 'SMS', icon: '💬', status: 'disconnected', desc: 'SMS notifications and OTP' },
            { name: 'Cloudinary', category: 'Media', icon: '🖼️', status: 'connected', desc: 'Image optimization and CDN' },
            { name: 'Intercom', category: 'Chat', icon: '💁', status: 'disconnected', desc: 'Live chat and customer messaging' },
          ].map(int => (
            <div key={int.name} className={`bg-white rounded-xl border-2 p-5 space-y-3 ${int.status === 'connected' ? 'border-[#D1FAE5]' : 'border-[#E2E2EC]'}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{int.icon}</span>
                  <div>
                    <p className="font-bold text-[#111118] text-sm">{int.name}</p>
                    <p className="text-xs text-[#9B9BB8]">{int.category}</p>
                  </div>
                </div>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${int.status === 'connected' ? 'bg-[#D1FAE5] text-[#065F46]' : 'bg-[#F4F4F8] text-[#9B9BB8]'}`}>
                  {int.status === 'connected' ? '● Connected' : '○ Not connected'}
                </span>
              </div>
              <p className="text-xs text-[#6B6B82]">{int.desc}</p>
              <button className={`w-full py-2 rounded-lg text-xs font-semibold ${int.status === 'connected' ? 'border border-[#E2E2EC] text-[#6B6B82] hover:bg-[#F4F4F8]' : 'bg-[#E8450A] text-white hover:bg-[#C93A07]'}`}>
                {int.status === 'connected' ? 'Configure' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      )}

      {tab === 'API' && (
        <div className="space-y-5">
          <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-xl px-5 py-3 flex items-center gap-3">
            <svg className="w-4 h-4 text-[#D97706] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="text-sm text-[#92400E]">Keep API keys secret. Never share or expose them in client-side code.</p>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
            <h3 className="font-semibold text-[#111118]">API Keys</h3>
            <div className="space-y-3">
              {[
                { label: 'Public Key', value: 'pk_live_nx_••••••••••••••••••••••••', env: 'Production' },
                { label: 'Secret Key', value: 'sk_live_nx_••••••••••••••••••••••••', env: 'Production' },
                { label: 'Webhook Secret', value: 'whsec_nx_••••••••••••••••••••••••', env: 'Production' },
              ].map(k => (
                <div key={k.label} className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#6B6B82] mb-1">{k.label} <span className="font-normal text-[#9B9BB8]">({k.env})</span></p>
                    <div className="flex items-center gap-2 h-9 px-3 bg-[#F4F4F8] border border-[#E2E2EC] rounded-lg">
                      <span className="font-mono text-sm text-[#6B6B82] flex-1">{k.value}</span>
                      <button className="text-xs font-semibold text-[#E8450A] hover:underline flex-shrink-0">Reveal</button>
                    </div>
                  </div>
                  <button className="mt-5 px-3 py-2 border border-[#E2E2EC] rounded-lg text-xs font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">Rotate</button>
                </div>
              ))}
            </div>
            <button className="px-4 py-2 bg-[#E8450A] text-white rounded-xl text-sm font-semibold">Generate New Key</button>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E2EC] p-5 space-y-4">
            <h3 className="font-semibold text-[#111118]">Webhooks</h3>
            <div className="space-y-2">
              {[
                { url: 'https://yourapp.com/webhooks/nexus', events: 'order.created, order.shipped', active: true },
                { url: 'https://analytics.yourapp.com/events', events: 'All events', active: false },
              ].map(wh => (
                <div key={wh.url} className="flex items-center justify-between py-2.5 border-b border-[#F4F4F8] last:border-0">
                  <div>
                    <p className="text-xs font-mono text-[#111118]">{wh.url}</p>
                    <p className="text-[11px] text-[#9B9BB8] mt-0.5">Events: {wh.events}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${wh.active ? 'bg-[#D1FAE5] text-[#065F46]' : 'bg-[#F4F4F8] text-[#9B9BB8]'}`}>{wh.active ? 'Active' : 'Inactive'}</span>
                    <button className="text-xs text-[#E8450A] font-semibold hover:underline">Edit</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="px-4 py-2 border border-[#E2E2EC] rounded-xl text-sm font-semibold text-[#6B6B82] hover:bg-[#F4F4F8]">+ Add Webhook</button>
          </div>
        </div>
      )}
    </div>
  )
}
