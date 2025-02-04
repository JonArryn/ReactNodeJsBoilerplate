import user from "../db/schema/user";

const UserResource = {
  id: user.id,
  name: user.name,
  email: user.email,
  created_at: user.created_at,
  updated_at: user.updated_at,
  deleted_at: user.deleted_at,
};

export { UserResource as default };
