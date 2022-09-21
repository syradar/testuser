import {
  TestUserType,
  TestUser,
  testUsers,
  filterTestUser
} from 'utils/testUser'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Radio } from './Radio'
import { Toggle } from './Toggle'

function App() {
  return (
    <div className="h-screen w-full bg-slate-800 p-12 text-slate-50">
      <div>
        <h1>Test User Finder</h1>
        <Selector />
        <UserList />
      </div>
    </div>
  )
}

export default App

interface TestUserFinderState {
  hasDividends: boolean
  type: TestUserType
  changeType: (type: TestUserType) => void
  toggleHasDividends: (newHasDividends: boolean) => void
}

const useTestUserFinderState = create<TestUserFinderState>()(
  devtools(
    persist(
      (set) => ({
        hasDividends: false,
        type: 'Bank',
        changeType: (type: TestUserType) => set({ type }),
        toggleHasDividends: (newHasDividends: boolean) =>
          set({ hasDividends: newHasDividends })
      }),
      {
        name: 'bear-storage'
      }
    )
  )
)

const Selector = () => {
  const { changeType, hasDividends, toggleHasDividends, type } =
    useTestUserFinderState()
  return (
    <div>
      <Toggle enabled={hasDividends} onChange={toggleHasDividends}>
        Has dividends
      </Toggle>

      <Radio
        options={['Bank', 'Corp', 'Advisor']}
        selected={type}
        onChange={changeType}
      />
    </div>
  )
}

const UserList = () => {
  const { hasDividends, type } = useTestUserFinderState()

  const copyToClipboard = (userId: string) => {
    navigator.clipboard.writeText(userId)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="bg-slate-700 py-2 px-4 text-left">ID</th>
            <th className="bg-slate-700 py-2 px-4 text-left">Type</th>
            <th className="bg-slate-700 py-2 px-4 text-left">Name</th>
            <th className="bg-slate-700 py-2 px-4 text-left">Has dividends</th>
          </tr>
        </thead>
        <tbody>
          {filterTestUser(testUsers, type, hasDividends).map((user) => (
            <tr
              key={user.id}
              className="group"
              onClick={() => copyToClipboard(user.id)}
            >
              <td className="cursor-copy bg-slate-600 py-2 px-4 transition group-hover:bg-slate-500">
                {user.id}
              </td>
              <td className="cursor-copy bg-slate-600 py-2 px-4 transition group-hover:bg-slate-500">
                {user.type}
              </td>
              <td className="cursor-copy bg-slate-600 py-2 px-4 transition group-hover:bg-slate-500">
                {user.name}
              </td>
              <td className="cursor-copy bg-slate-600 py-2 px-4 transition group-hover:bg-slate-500">
                {user.hasDividends ? 'Yes' : 'No'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
