import { PrismaClient } from "@prisma/client";
import DbClient from "../../database/DbClient";
import { Department } from "../../types/Department";
import { APIError } from "../../utils/app-errors";

class DepartmentRepository {
  private dbClient: PrismaClient = DbClient.getInstance();

  public async getAllDepartments(whereClauses: any): Promise<Department[]> {
    try {
      const allDepartments: Department[] = await this.dbClient.department.findMany({
        where: whereClauses,
        include: {
          pic: { 
            select: {
              id: true,
              surename: true
            } 
          },
          supervisor: { 
            select: {
              id: true,
              surename: true
            } 
          }
        }
      })
      return allDepartments;
    }
    catch (err: any) {
      throw new APIError("Unable to get all departments");
    }
  }
}

export default DepartmentRepository;