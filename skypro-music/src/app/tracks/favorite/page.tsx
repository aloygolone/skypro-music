"use client";

import { getFavoritesTracks } from "@/api/tracks";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getValueFromLocalStorage } from "@/lib/getValueFromLS";
import { setAuthState } from "@/store/features/authSlice";
import { TrackType } from "@/types";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function FavoriteTracksPage() {
  const token = useAppSelector((state) => state.auth.userData.access);
  console.log(token);
  const [tracksData, setTracksData] = useState<TrackType[]>([]);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getFavoritesTracks(token)
      .then((data) => {
        setTracksData(data);
      })
      .catch((error) => {
        if (error.message === "401") {
          dispatch(setAuthState(false));
          router.push("/signin");
        } else {
          alert(error.message);
        }
      });
  }, [dispatch, router, token]);

  return (
    <CenterBlock tracks={tracksData} playlist={tracksData} isFavorite={true} />
  );
}
