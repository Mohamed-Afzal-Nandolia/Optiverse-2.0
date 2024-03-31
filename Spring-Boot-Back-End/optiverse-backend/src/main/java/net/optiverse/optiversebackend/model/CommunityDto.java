package net.optiverse.optiversebackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommunityDto {

    private Long c_id;

    private Long u_id;

    private String c_name;

    private String c_description;

    private String c_post;

    private LocalDate c_date;

    private Long c_like;

    private String c_topic;

    private Boolean c_mature;

}
