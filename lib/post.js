import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')
console.log(postDirectory)

export function getAllPostIds() {
    const fileName = fs.readdirSync(postDirectory)
    console.log(fileName)

    return fileName.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export function getPostData(id) {
    const fullPath = path.join(postDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
        id,
        ...matterResult.data
    }
}