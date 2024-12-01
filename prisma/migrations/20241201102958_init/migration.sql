-- CreateEnum
CREATE TYPE "experienceInCoding" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'EXPERT');

-- CreateEnum
CREATE TYPE "prevWorkshop" AS ENUM ('YES', 'NO');

-- CreateTable
CREATE TABLE "reactDriftParticipants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "experienceInCoding" "experienceInCoding" NOT NULL DEFAULT 'BEGINNER',
    "linkedIn" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "portfolio" TEXT,
    "motivationQuestion" TEXT,
    "prevExperienceInCoding" TEXT,
    "prevWorkshop" "prevWorkshop" NOT NULL DEFAULT 'NO',
    "submittedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reactDriftParticipants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reactDriftParticipants_email_key" ON "reactDriftParticipants"("email");

-- CreateIndex
CREATE UNIQUE INDEX "reactDriftParticipants_contact_key" ON "reactDriftParticipants"("contact");
