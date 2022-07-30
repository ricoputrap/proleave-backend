import { PrismaClient } from "@prisma/client";
import DbClient from "../../database/DbClient";
import { Department } from "../../types/Department";
import { APIError } from "../../utils/app-errors";

class DepartmentRepository {
  private dbClient: PrismaClient = DbClient.getInstance();

  public async getAllDepartments(): Promise<Department[]> {
    try {
      const allDepartments: Department[] = await this.dbClient.department.findMany();
      return allDepartments;
    }
    catch (err: any) {
      throw new APIError("Unable to get all departments");
    }
  }
}

export default DepartmentRepository;