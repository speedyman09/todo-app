-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "instruction" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
