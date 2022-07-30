import { USER_URL } from "../../api/v1";
import DepartmentRepository from "../../repository/DepartmentRepository";
import { DATA_TYPES } from "../../types";
import { Department } from "../../types/Department";
import { ForeignKey } from "../../types/utils";
import { formatResponseMultiple } from "../../utils/data-formatters";

class DepartmentService {
  private repository: DepartmentRepository;

  constructor() {
    this.repository = new DepartmentRepository();
  }

  public async getAllDepartments(): Promise<any> {
    try {
      const { USERS, DEPARTMENTS } = DATA_TYPES;
      const departments: Department[] = await this.repository.getAllDepartments();
      const foreignKeys: ForeignKey[] = [
        { field: "pic_id", type: USERS, endpoint: USER_URL },
        { field: "supervisor_id", type: USERS, endpoint: USER_URL }
      ];

      return formatResponseMultiple(departments, DEPARTMENTS, foreignKeys);
    }
    catch (err: any) {
      throw err;
    }
  }
}

export default DepartmentService;