-- CreateTable
CREATE TABLE "contact" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "message" VARCHAR(255) NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);
