import React, { useState, useEffect } from "react";
import alert from "../asset/alert.svg";
import * as S from "./index.style";
import axios from "axios"; // API 호출을 위한 axios

interface Notification {
  id: number;
  text: string;
  approved?: boolean;
}

const index = () => {
  const [activeTab, setActiveTab] = useState<string>("내 지원");
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    fetchNotifications();
  }, [activeTab]);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`/api/notifications?tab=${activeTab}`);
      setNotifications(response.data);
    } catch (error) {
      console.error("Error fetching notifications", error);
    }
  };

  const loadMoreNotifications = async () => {
    if (!hasMore) return;
    try {
      const response = await axios.get(
        `/api/notifications?tab=${activeTab}&offset=${notifications.length}`
      );
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        ...response.data,
      ]);
      if (response.data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more notifications", error);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setNotifications([]);
    setHasMore(true);
  };

  const renderNotification = (notification: Notification) => {
    return (
      <div key={notification.id}>
        <span>{notification.text}</span>
        {activeTab === "내 대회" && (
          <button>{notification.approved ? "승인됨" : "승인하기"}</button>
        )}
      </div>
    );
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      loadMoreNotifications();
    }
  };

  return (
    <S.Layout>
      <S.Padding>
        <S.Head>
          <S.HeadImg src={alert} alt="alert" />
          <S.HeadText>알림</S.HeadText>
        </S.Head>

        <S.BodyHead>
          <S.Type
            isActive={activeTab === "내 지원"}
            onClick={() => handleTabChange("내 지원")}
          >
            내 지원
          </S.Type>
          <S.Type
            isActive={activeTab === "내 대회"}
            onClick={() => handleTabChange("내 대회")}
          >
            내 대회
          </S.Type>
          <S.Type
            isActive={activeTab === "내 게시글"}
            onClick={() => handleTabChange("내 게시글")}
          >
            내 게시글
          </S.Type>
        </S.BodyHead>
        <div onScroll={handleScroll}>
          {notifications.map(renderNotification)}
          {hasMore && <div>Loading more...</div>}
        </div>
      </S.Padding>
    </S.Layout>
  );
};

export default index;
