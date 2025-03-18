import { promises as fs } from 'fs'
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Frontmatter } from "@/types/frontmatter";

const filenames = await fs.readdir(path.join(process.cwd(), 'src/markdown'));

const articles = await Promise.all(filenames.map(async (filename) => {
    const contentMDX = await fs.readFile(path.join(process.cwd(), 'src/markdown', filename), 'utf-8');
    const { content, frontmatter } = await compileMDX<Frontmatter>({
        source: contentMDX,
        options: {
            parseFrontmatter: true
        }
    })
    return {
        slug: filename.replace('.mdx', ''),
        filename, 
        content,
        ...frontmatter
    }
}))

export default articles