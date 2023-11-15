import { simpleGit } from 'simple-git'

const gitPath = '/home/leiyunkang/code/github/core'

export default defineEventHandler(async () => {
  return getBranchLocal()
})

export  function getBranchLocal(){
  const git = simpleGit(gitPath, {binary: 'git'})

  return git.branchLocal()
}