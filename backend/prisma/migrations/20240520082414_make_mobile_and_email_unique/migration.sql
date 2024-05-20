/*
  Warnings:

  - A unique constraint covering the columns `[email,tel]` on the table `client` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "client_email_tel_key" ON "client"("email", "tel");
