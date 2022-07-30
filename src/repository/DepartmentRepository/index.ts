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
        select: {
          id: true,
          name: true,
          description: true,
          is_archived: true,

          // foreign keys
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
          },

          // counts
          _count: {
            select: {
              members: true
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