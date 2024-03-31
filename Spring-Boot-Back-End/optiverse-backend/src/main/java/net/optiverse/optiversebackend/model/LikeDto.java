package net.optiverse.optiversebackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.optiverse.optiversebackend.entity.Post;
import net.optiverse.optiversebackend.entity.User;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LikeDto {

    private Long l_id;

    private User u_id;

    private Post p_id;

    private Long likeCount;

}
