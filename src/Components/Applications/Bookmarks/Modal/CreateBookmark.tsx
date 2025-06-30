import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setAddModal } from "../../../../ReduxToolkit/Reducers/BookmarkTabSlice";
import BookmarkFormModal from "./Common/BookmarkFormModal";

const CreateBookmark= () => {
  const { addModal } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();

  return <BookmarkFormModal isOpen={addModal} toggle={() => dispatch(setAddModal())} />;
};

export default CreateBookmark;