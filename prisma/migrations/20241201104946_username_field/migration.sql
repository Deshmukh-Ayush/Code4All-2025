/*
  Warnings:

  - Added the required column `username` to the `reactDriftParticipants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reactDriftParticipants" ADD COLUMN     "username" TEXT NOT NULL;
