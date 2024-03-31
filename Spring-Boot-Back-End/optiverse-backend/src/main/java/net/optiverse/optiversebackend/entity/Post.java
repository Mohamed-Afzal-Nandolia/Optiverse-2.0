package net.optiverse.optiversebackend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name ="posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long p_id;

    // @ManyToOne = This is the default behavior, which is equivalent to @ManyToOne(fetch = FetchType.EAGER).
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "u_id", referencedColumnName = "u_id")
    private User u_id;

    @Column(name = "p_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate p_date;

    @Column(name = "p_tag")
    private String p_tag;

    @Column(name = "p_post")
    private String p_post;

    @Column(name = "p_like")
    private Long p_like;

    @Column(name = "p_share")
    private Long p_share;

}
