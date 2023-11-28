import {User} from '@/types'
import {persist, createJSONStorage} from 'zustand/middleware'
import {create} from 'zustand'

interface UserStore {
  user: User | null
  setUserLogged: (data: User) => void
  updateUser: (data: User) => void
  setUserLogout: () => void
}

const useUser = create(
  persist<UserStore>(
    set => ({
      user: null,
      setUserLogged: (data: User) => set({user: data}),
      updateUser: (data: User) => set({user: data}),
      setUserLogout: () => set({user: null}),
    }),
    {
      name: 'userInfo',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useUser
