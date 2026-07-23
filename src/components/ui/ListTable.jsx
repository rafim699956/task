import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { useDispatch} from "react-redux";
import { useTranslation } from "react-i18next";
import { Button } from "./button";
import { openEditPopup } from "../../../app/features/popup/popupSlice.js";
import { deleteTask } from "../../../app/features/tasklist/tasklistSlice.js";

const ListTable = ({ tasks = [], action = false }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Table>
      <TableHeader>
        <TableHead className="text-white text-center">
          {t("table.Date")}
        </TableHead>
        <TableHead className="text-white text-center">
          {t("table.ActionId")}
        </TableHead>
        <TableHead className="text-white text-center">
          {t("table.Employee")}
        </TableHead>
        <TableHead className="text-white text-center">
          {t("table.TaskPriority")}
        </TableHead>
        <TableHead className="text-white text-center">
          {t("table.Task")}
        </TableHead>
        <TableHead className="text-white text-center">
          {t("table.Status")}
        </TableHead>
        {action && (
          <TableHead className="text-white text-center">
            {t("table.Action")}
          </TableHead>
        )}
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell className="text-white text-center">
              {task.date}
            </TableCell>
            <TableCell className="text-white text-center">
              {task.employee}
            </TableCell>
            <TableCell className="text-white text-center">
              {task.employee}
            </TableCell>
            <TableCell className="text-white text-center">
              {task.taskPriority}
            </TableCell>
            <TableCell className="text-white text-center">
              {task.taskContent}
            </TableCell>
            <TableCell className="text-white text-center">
              {task.status}
            </TableCell>
            {action && (
              <TableCell className="text-white text-center">
                <Button
                  size="sm"
                  onClick={() => dispatch(openEditPopup(task))}
                  className="bg-green-600 hover:bg-green-700 text-white mr-1"
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="text-white bg-red-400 hover:bg-red-700"
                  onClick={()=>dispatch(deleteTask(task.id))}
                >
                  Delete
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListTable;
