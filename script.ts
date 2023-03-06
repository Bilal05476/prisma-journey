import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
//    const user = await prisma.user.create({data: {
//     name: "Bilal",
//     email: "bilal@gmail.com",
//     age: 23
//    }})
//    console.log(user)
//    const users = await prisma.user.findMany();
//    console.log(users)
   await prisma.user.deleteMany();


}
main()

async function posts(){
    // const post = await prisma.post.create({
    //     data: {
    //         rating: 4.3,
    //         authorId: '31c39bfc-09c5-478f-a173-ea9320daa617',
    //         categories: {
    //             connect: {
    //                 id: "508bfbac-738e-4936-9b03-a8248818afed"
    //             }
                
    //         }
    //     }
    // })
    // console.log(post)
   await prisma.post.deleteMany();

}

async function cats(){
    // const cat = await prisma.category.create({
    //     data: {
    //         name: "Kitchen",
    //     }
    // })
    // console.log(cat)
   await prisma.category.deleteMany();

}
cats()
posts()