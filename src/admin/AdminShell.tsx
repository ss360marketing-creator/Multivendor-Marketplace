import type { View } from '../app/navigation'
import AdminShellContent from './AdminShellContent'

type Props = {
  onExitAdmin: (v: View) => void
}

export default function AdminShell(props: Props) {
  return <AdminShellContent {...props} />
}
