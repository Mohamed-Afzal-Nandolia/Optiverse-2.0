package net.optiverse.optiversebackend.model;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.optiverse.optiversebackend.entity.User;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {

    private Long p_id;

    private User u_id;

    private LocalDate p_date;

    private String p_tag;

    private String p_post;

    private Long p_like;

    private Long p_share;

}