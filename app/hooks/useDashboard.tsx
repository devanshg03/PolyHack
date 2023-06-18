import { create } from 'zustand'

interface DashboardStore{
    company:string,
    goal:string
    onChangeCompany: (company:string) => void,
    onChangeGoal: (goal:string) => void,
    twitterSentiment : number[]
}

const useDashboard = create<DashboardStore>((set)=>({
    company:'',
    goal:'',
    twitterSentiment:[],
    onChangeCompany: (company:string) => set({company:company}),
    onChangeGoal: (goal:string) => set({goal:goal}),
    onChangeTwitterSentiment : (sentiment:number[]) => set({twitterSentiment:sentiment})
}))

export default useDashboard