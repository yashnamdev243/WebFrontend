import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return <Skeleton height="100%" width="100%" className="rounded-lg " />;
};

export default SkeletonLoader;
