import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setEditModal } from "../../../../ReduxToolkit/Reducers/BookmarkTabSlice";
import BookmarkFormModal from "./Common/BookmarkFormModal";

const EditBookmark = () => {
  const { editRow, editModal } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();

  return <BookmarkFormModal isOpen={editModal} toggle={() => dispatch(setEditModal())} initialData={editRow} />;
};
export default EditBookmark;