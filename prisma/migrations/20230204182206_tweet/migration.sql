-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_userId_fkey";

-- AlterTable
ALTER TABLE "Tweet" ALTER COLUMN "id" SET DEFAULT gen_random_uuid ();
ALTER TABLE "Tweet" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
