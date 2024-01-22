import { useGraphStore } from '../store'

export function formatRefs(str: string) {
  return str
    .split(', ')
    .map(label => {
      const tagName = tagLogical(label)

      if (tagName) {
        return {
          isTag: true,
          tagName
        }
      }

      const branchResult = branchLogical(label)

      if (branchResult) {
        return {
          ...branchResult,
          isBranch: true
        }
      }

      const headName = headLogical(label)

      if (headName) {
        return {
          isHead: true,
          headName
        }
      }
    })
    .filter(Boolean)
}

const tagText = 'tag: '
export function tagLogical(str: string) {
  const isTag = str.startsWith(tagText)

  if (!isTag) return

  const tagName = str.replace(tagText, '')

  return tagName
}

export function branchLogical(str: string) {
  const [originName, branchName] = str.split('/')

  const { remoteMap } = storeToRefs(useGraphStore())

  if (!originName) return

  const originList = Object.keys(remoteMap.value)

  const isBranch = originList.includes(originName)

  if (!isBranch) return

  return {
    originName,
    branchName
  }
}

const headText = 'HEAD -> '
export function headLogical(str: string) {
  const isHead = str.startsWith(headText)

  if (!isHead) return

  const branchName = str.replace(headText, '')

  return branchName
}
