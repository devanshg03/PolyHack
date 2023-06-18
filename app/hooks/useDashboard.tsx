import { create } from 'zustand'

interface DashboardStore{
    company:string,
    goal:string
    onChangeCompany: (company:string) => void,
    onChangeGoal: (goal:string) => void
}

const useDashboardStore = create<DashboardStore>((set)=>({
    company:'',
    goal:'',
    onChangeCompany: (company:string) => set({company:company}),
    onChangeGoal: (goal:string) => set({goal:goal})
}))

export default useDashboardStore