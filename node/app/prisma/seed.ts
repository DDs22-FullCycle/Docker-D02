import { peoples } from './seed_peoples';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main(){

  console.log(peoples)

  for (let people of peoples) {
    //console.log(curso)
    const teste = await prisma.peoples.upsert({
      where: { peopleId : people.peopleId },
      create: people,
      update: people
    })  
  }
  return null;
  
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
