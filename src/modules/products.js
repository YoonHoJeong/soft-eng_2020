const ADD_PRODUCT = "products/ADD_PRODUCT";
const DELETE_PRODUCT = "products/DELETE_PRODUCT";
const UPDATE_PRODUCT = "products/UPDATE_PRODUCT";

let projectId = 1;

export const addProject = (title, dueDate) => ({
  type: ADD_PRODUCT,
  data: { id: projectId++, title, dueDate, todos: [] },
});

export const deleteProject = (id) => ({
  type: DELETE_PRODUCT,
  data: { id },
});

const initialState = [
  {
    id: 0,
    title: "React Native Study",
    dueDate: "2020-09-04",
  },
];

export default function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return state.concat(action.data);
    case DELETE_PRODUCT:
      return state.filter((project) => project.id !== action.data.id);
    default:
      return state;
  }
}
