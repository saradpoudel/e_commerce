/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tel]` on the table `client` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "client_email_tel_key";

-- CreateIndex
CREATE UNIQUE INDEX "client_email_key" ON "client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_tel_key" ON "client"("tel");
