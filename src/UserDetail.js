import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserDetailAsync } from "./action";

export default function UserDetail() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.username)

  useEffect(() => {
    dispatch(fetchUserDetailAsync());
  }, [])
  return (
    <div>
      UserDetail
      <p>username: {name}</p>
    </div>
  )
}