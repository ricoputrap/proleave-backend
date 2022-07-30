-- CreateEnum
CREATE TYPE "Role" AS ENUM ('EMPLY', 'HRMBR', 'HRDIR', 'SPVSR', 'SPADM');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "employee_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "fullname" VARCHAR(255) NOT NULL,
    "surename" VARCHAR(20) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'EMPLY',
    "department_id" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "is_archived" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "pic_id" INTEGER,
    "supervisor_id" INTEGER,
    "is_archived" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_employee_id_key" ON "User"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_pic_id_fkey" FOREIGN KEY ("pic_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_supervisor_id_fkey" FOREIGN KEY ("supervisor_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
