-- CreateTable
CREATE TABLE "Tweet" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid (),
    "body" STRING NOT NULL,
    "length" INT4 NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Tweet_userId_idx" ON "Tweet"("userId");

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
