import { Express, Request, Response, NextFunction } from "express"
import { DEPARTMENT_URL } from "..";
import DepartmentService from "../../../services/DepartmentService"
import { STATUS_CODES } from "../../../types";

const DepartmentAPI = (app: Express) => {
  const service = new DepartmentService();

  // GET ALL DEPARTMENTS
  app.get(DEPARTMENT_URL, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const departments: any[] = await service.getAllDepartments();
      return res.status(STATUS_CODES.OK).json(departments);
    }
    catch (err: any) {
      const error: any = err.getErrorResponse();
      const errorResponse = { error };
      return res.status(error.statusCode).json(errorResponse);
    }
  });
}

export default DepartmentAPI;