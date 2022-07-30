interface Department {
  id?: number;
  name: string;
  description: string;
  total_members?: number;
  pic_id?: number | null;
  supervisor_id?: number | null;
  is_archived?: boolean;
  created_at?: any;
  updated_at?: any;
}

export { Department }