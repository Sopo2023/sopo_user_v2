import styled from "styled-components";

const PostSkeleton = ()=>{
    return (
        <Container>
          {Array.from({ length: 6 }).map((_, idx) => (
            <Item key={idx} />
          ))}
        </Container>
      );

}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  display: flex;
  row-gap: 10px;
`;

const Item = styled.div`
  min-width: 240px;
  width: 300px;
  height: 244px;
  max-height: 244px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export default PostSkeleton;