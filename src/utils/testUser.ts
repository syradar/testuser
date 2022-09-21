export type TestUserType = 'Bank' | 'Corp' | 'Advisor'

export type TestUser = {
  id: string
  name: string
  hasDividends: boolean
  type: TestUserType
}

export const filterTestUser = (
  testUsers: TestUser[],
  type: TestUserType,
  hasDividends: boolean
): TestUser[] => {
  return testUsers.filter(
    (testUser) =>
      testUser.type === type && testUser.hasDividends === hasDividends
  )
}

export const testUsers: TestUser[] = [
  {
    id: '100123345456',
    name: 'Test User 1',
    hasDividends: true,
    type: 'Bank'
  },
  {
    id: '100123345451',
    name: 'Test User 1',
    hasDividends: true,
    type: 'Bank'
  },
  {
    id: '100123345452',
    name: 'Test User 1',
    hasDividends: true,
    type: 'Bank'
  },
  {
    id: '100123345453',
    name: 'Test User 1',
    hasDividends: true,
    type: 'Bank'
  },
  {
    id: '200123345456',
    name: 'Test User 2',
    hasDividends: false,
    type: 'Bank'
  },
  {
    id: '300123345456',
    name: 'Test User 3',
    hasDividends: true,
    type: 'Corp'
  },
  {
    id: '400123345456',
    name: 'Test User 4',
    hasDividends: false,
    type: 'Corp'
  },
  {
    id: '500123345456',
    name: 'Test User 5',
    hasDividends: true,
    type: 'Advisor'
  },
  {
    id: '600123345456',
    name: 'Test User 6',
    hasDividends: false,
    type: 'Advisor'
  }
]
