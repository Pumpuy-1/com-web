// rafce
import React, { useState, useEffect } from "react";
import { getListAllUsers, changeUserStatus, changeUserRole } from "../../api/admin";
import useEcomStore from "../../store/ecom-store";
import { toast } from "react-toastify";

// ⚠️ ต้องตรงกับค่าที่เช็กใน server/middlewares/authCheck.js (ตัวพิมพ์เล็ก-ใหญ่ต้องตรง)
const ADMIN_ROLE = "ADMIN";

const TableUsers = () => {
  const token = useEcomStore((state) => state.token);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleGetUsers(token);
  }, []);

  const handleGetUsers = (token) => {
    getListAllUsers(token)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const handleChangeUserStatus = (userId, userStatus) => {
    const value = { id: userId, enabled: !userStatus };
    changeUserStatus(token, value)
      .then(() => {
        handleGetUsers(token);
        toast.success("Update Status Success!!");
      })
      .catch((err) => console.log(err));
  };

  const handleChangeUserRole = (userId, userRole) => {
    const value = { id: userId, role: userRole };
    changeUserRole(token, value)
      .then(() => {
        handleGetUsers(token);
        toast.success("Update Role Success!!");
      })
      .catch((err) => console.log(err));
  };

  // แปลงค่า role ใน database ให้ตรงกับตัวเลือก ไม่ว่าจะเป็น admin หรือ ADMIN
  const getRoleValue = (role) =>
    role?.toUpperCase() === ADMIN_ROLE.toUpperCase() ? ADMIN_ROLE : "user";

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-3 text-left">ลำดับ</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">สิทธิ์</th>
            <th className="px-4 py-3 text-left">สถานะ</th>
            <th className="px-4 py-3 text-left">จัดการ</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((el, i) => (
            <tr key={el.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{i + 1}</td>
              <td className="px-4 py-3">{el.email}</td>

              <td className="px-4 py-3">
                <select
                  className="border border-gray-300 rounded-md px-2 py-1"
                  onChange={(e) => handleChangeUserRole(el.id, e.target.value)}
                  value={getRoleValue(el.role)}
                >
                  <option value="user">user</option>
                  <option value={ADMIN_ROLE}>admin</option>
                </select>
              </td>

              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    el.enabled
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {el.enabled ? "Active" : "Inactive"}
                </span>
              </td>

              <td className="px-4 py-3">
                <button
                  className={`text-white px-4 py-1.5 rounded-md shadow-md ${
                    el.enabled
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                  onClick={() => handleChangeUserStatus(el.id, el.enabled)}
                >
                  {el.enabled ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;