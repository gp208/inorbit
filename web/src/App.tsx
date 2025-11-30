import { CreateGoal } from './components/create-goal'
import { NoGoals } from './components/no-goals'
import { Dialog } from './components/ui/dialog'

export function App() {
  return <Dialog><NoGoals/><CreateGoal/></Dialog>
}