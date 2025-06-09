import UsersTable from "./admin-users-table";

export default function AdminUserBody() {
  return (
    <div className="mt-8 pl-4 pr-5 w-full">
      <div className="verflow-x-auto w-full pb-10 mt-3">
        <UsersTable />
      </div>
    </div>
  );
}
