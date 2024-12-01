/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `reactDriftParticipants` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "reactDriftParticipants_username_key" ON "reactDriftParticipants"("username");
